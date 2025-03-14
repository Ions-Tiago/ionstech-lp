import React, { useState } from "react";

// faq questions and answers
const faqData = [

  {

    "question": "O que é RPA e como ele pode ajudar minha empresa?",

    "answer": "RPA (Robotic Process Automation) automatiza tarefas repetitivas, reduzindo erros, aumentando a produtividade e liberando sua equipe para atividades estratégicas. Ideal para operações financeiras, atendimento ao cliente, compliance e muito mais."

  },

  {

    "question": "Quais tipos de sistemas vocês desenvolvem?",

    "answer": "Criamos soluções personalizadas, como ERP, CRM, sistemas de automação de processos, gestão financeira, controle de estoque, aplicações web e mobile, adaptadas às necessidades do seu negócio."

  },

  {

    "question": "Vocês trabalham com Inteligência Artificial? Como ela pode ser aplicada?",

    "answer": "Sim! Aplicamos IA para análise de dados, previsões de mercado, automação de atendimento, reconhecimento de padrões, geração de insights e tomada de decisão estratégica, tornando sua empresa mais competitiva."

  },

  {

    "question": "Como funciona a consultoria em tecnologia e processos?",

    "answer": "Analisamos seus processos operacionais, identificamos gargalos e oportunidades de melhoria e implementamos soluções tecnológicas que aumentam eficiência, reduzem custos e otimizam fluxos de trabalho."

  },

  {

    "question": "Qual o diferencial da automação com RPA?",

    "answer": "Nosso RPA é altamente adaptável e escalável, permitindo a automação de processos manuais sem necessidade de grandes mudanças na infraestrutura. Além disso, garantimos suporte e evolução contínua das automações."

  },

  {

    "question": "Vocês desenvolvem sites e aplicações personalizadas?",

    "answer": "Sim! Criamos sites institucionais, plataformas digitais e aplicações web e mobile sob medida, garantindo segurança, escalabilidade e uma experiência otimizada para o usuário."

  },

  {

    "question": "Quais tecnologias vocês utilizam?",

    "answer": "Não nos prendemos a uma linguagem ou tecnologia específica. Cada projeto tem suas características próprias e utilizamos a tecnologia que melhor se encaixa, garantindo performance, escalabilidade e segurança."

  },

  {

    "question": "Como garantem a segurança dos sistemas e processos automatizados?",

    "answer": "Utilizamos criptografia, controle de acesso por perfil, auditorias regulares e seguimos normas como LGPD para garantir a segurança e conformidade dos dados da sua empresa."

  },

  {

    "question": "Qual o prazo médio para desenvolvimento de uma solução?",

    "answer": "O tempo varia conforme a complexidade do projeto. Pequenos processos de RPA podem ser entregues em semanas, enquanto sistemas completos podem levar de 3 a 6 meses, com entregas ágeis e iterativas."

  },

  {

    "question": "Como funciona o suporte e manutenção das soluções implementadas?",

    "answer": "Oferecemos suporte contínuo para ajustes, monitoramento de performance, atualizações e evolução das soluções, garantindo estabilidade e eficiência no longo prazo."

  },

  {

    "question": "Como funciona a estrutura de dados, banco de dados, interface e comunicação?",

    "answer": "Projetamos arquiteturas flexíveis, utilizando bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis), APIs para integração segura entre sistemas e interfaces intuitivas para melhor experiência do usuário."

  },

  {

    "question": "Quantos processos já foram implementados pela empresa?",

    "answer": "Já desenvolvemos e implementamos mais de 400 processos de automação em diversas áreas, ajudando empresas a otimizar suas operações e alcançar maior eficiência."

  }

];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="w-4/5 m-auto my-20 p-4" id="faq">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">Perguntas frequentes:</h1>
      {
        faqData.map((faq, index)=>(
          <div key={index} className="mb-4">
            <div onClick={() => toggleFaq(index)} className="flex justify-between items-center bg-white/50 px-5 py-3 rounded-lg cursor-pointer">
              <h2 className="text-lg font-medium text-gray-700">{faq.question}</h2>
              <span className="text-xl text-gray-500">{openFaq === index ? "-": "+"}</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40": "max-h-0"}`}>
              <p className="p-4 text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
export default Faq;