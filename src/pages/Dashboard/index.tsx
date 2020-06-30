import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repositories, Repository } from './styles';

const Dashboard: React.FC = () => (


  <>
    <Title>Explore repositorios no Github</Title>

    <Form>
      <input type="text" placeholder='Digite aqui o repositorio' />

      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>


      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/11820690?s=460&u=977d19e677c749524da5dbf15328f4f0a66db180&v=4" alt="" />

        <div>
          <strong>DnD Mobile</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <FiChevronRight size='20' />
      </a>

      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/11820690?s=460&u=977d19e677c749524da5dbf15328f4f0a66db180&v=4" alt="" />

        <div>
          <strong>DnD Mobile</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <FiChevronRight size='20' />
      </a>

      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/11820690?s=460&u=977d19e677c749524da5dbf15328f4f0a66db180&v=4" alt="" />

        <div>
          <strong>DnD Mobile</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <FiChevronRight size='20' />
      </a>
      <a href="">
        <img src="https://avatars2.githubusercontent.com/u/11820690?s=460&u=977d19e677c749524da5dbf15328f4f0a66db180&v=4" alt="" />

        <div>
          <strong>DnD Mobile</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>

        <FiChevronRight size='20' />
      </a>


    </Repositories>
  </>
)

export default Dashboard;
