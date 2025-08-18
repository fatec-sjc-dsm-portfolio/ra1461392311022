import React, { useState } from 'react';
import './projetos.css';
import { faCss3Alt, faFigma, faGithub, faHtml5, faJava, faJira, faJs, faNodeJs, faPython, faReact, faSlack, faTrello } from '@fortawesome/free-brands-svg-icons';
import { SiChartdotjs, SiDocker, SiExpo, SiFirebase, SiFlask, SiPrisma } from "react-icons/si";
import { Mysql, SpringBootIcon, TypeScriptIcon } from './icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../navbar/navbar';

interface Project {
    title: string;
    image: string;
    description: string;
    sobre: string;
    technologies: any[]; 
    contribuicoesPessoais: string;
    hardSkil: any[];
    softSkil: any[];
    link: string;
}

export default function Projetos(){
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleModal = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    const projects: Project[] = [
        {
            title: "API 1° semestre - Covidinho",
            image: "/imgs/projetos/api-1semestre.png",
            description: "API do 1° semestre de DSM de 2023 sobre a Covid Longa.",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° semestre de Desenvolvimento de 
            Software Multiplataforma (DSM) em parceria com a Vanguarda sobre dados relacionados à covid longa no Vale do Paraíba 
            para um site de uso jornalístico.
            
            Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, 
            ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas 
            da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região 
            do Vale do Paraíba, visando criar novas matérias para o jornal.`,
            technologies: [faFigma, faGithub, faTrello, SiChartdotjs, faHtml5, faCss3Alt, faPython, faJs, Mysql],
            link:'https://github.com/Equipe-01-DSM-2023/API-2023.1',
            hardSkil: ['Manipulação de dados com Python', 'Criação dos gráficos com JavaScript', 'Estilização com HTML', 'Estilização com CSS', 
                'Criação do banco de dados e armazenamento de dados com o MySQL'
            ],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados', 'Adaptabilidade', 'Flexibilidade'],
            contribuicoesPessoais: `Neste projeto, atuei como membro da equipe de desenvolvimento seguindo a metodologia Scrum. Contribuí 
            no desenvolvimento tanto do front-end quanto do back-end. Além disso, realizei a manipulação de dados obtidos através da 
            raspagem do site DataSusTabnet, integrando-os aos gráficos que desenvolvi, a fim de facilitar a visualização e interpretação dessas 
            informações. 
            Participei também das etapas de pesquisa e coleta de dados para a execução do nosso projeto.`
        }
    ];

    return(
        <>
            <Header />
            <div className='container1'>
                <div className='content1'>
                    <div className="projetos">
                            <h1>Projetos</h1>
                            <h5>Bem vindo à página de projetos! Aqui você poderá encontrar todos os projetos realizados por mim até agora.</h5>
                            <p color="grey"><i>Para visualização clique nos cards para mais informações sobre os projetos</i></p>
                            <div className="card-container">
                                {projects.map((project, index) => (
                                    <div key={index} className="card-wrapper">
                                        <Card onClick={() => handleModal(project)}>
                                        <Card.Img variant="top" src={project.image} alt="Imagem do projeto" />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do Projeto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedProject && (
                    <>
                    <p><b>Sobre o projeto:</b></p>
                    <p>{selectedProject.sobre.split('\n').map((line, index) => (
                        <span key={index}>
                        {line}
                        <br />
                        </span>
                    ))}</p>
                    <hr />
                    <div className='skills'>
                        <div className='hardSkill'>
                            <p><b>Hard Skills:</b></p>
                            <ul>
                                {selectedProject.hardSkil.map((skill, index) => (
                                <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='softSkill'>
                            <p><b>Soft Skills:</b></p>
                            <ul>
                                {selectedProject.softSkil.map((skill, index) => (
                                <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p><b>Contribuições pessoais:</b></p>
                    <p>{selectedProject.contribuicoesPessoais.split('\n').map((line, index) => (
                        <span key={index}>
                        {line}
                        <br />
                        </span>
                    ))}</p>
                    <p><b>Tecnologias utilizadas:</b></p>
                    <div className='tecnologias'>
                        {selectedProject.technologies.map((icon: any, index: any) => {
                            if (typeof icon === 'function') {
                                const IconComponent = icon;
                                return <IconComponent style={{ fontSize: '48px', marginRight: '10px' }} />;
                            } else {
                                return <FontAwesomeIcon icon={icon} style={{ fontSize: '48px', marginRight: '10px' }} />;
                            }
                        })}
                    </div>
                    <Button href={selectedProject.link} target="_blank">Ver Projeto</Button>
                    </>
                )}
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Fechar
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}