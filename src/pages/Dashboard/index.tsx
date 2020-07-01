import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight } from "react-icons/fi";

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  }
}
const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>(() => {

    const storedRepositories = localStorage.getItem('@GithubExplorer:repositories')

    if (storedRepositories) {
      return JSON.parse(storedRepositories)
    }

    return []
  });
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!inputError) {
      setInputError('Pesquise por autor/repositório')
      return
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)
      const repository = response.data;

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('Repositório não encontrado')
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github_Explorer" />
      <Title>Explore repositorios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder='Digite aqui o repositorio' />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {
          repositories.map(repository => (
            <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size='20' />
            </Link>
          ))
        }

      </Repositories>
    </>
  )
}

export default Dashboard;
