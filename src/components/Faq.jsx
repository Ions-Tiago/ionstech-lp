import React, { useState } from "react";

// faq questions and answers
const faqData = [
  {
    question: "Quais tipos de sistemas de gestão vocês desenvolvem?",
    answer: "Criamos soluções personalizadas como ERP, CRM, sistemas de estoque, gestão de projetos e financeiros, adaptados às necessidades do seu negócio."
  },
  {
    question: "Quais tecnologias ou frameworks vocês utilizam?",
    answer: "Trabalhamos com React, Node.js, Python/Django e plataformas em nuvem (AWS/Azure). Adaptamos as ferramentas conforme o projeto exige."
  },
  {
    question: "As landing pages podem integrar com outras ferramentas?",
    answer: "Sim! Integramos com CRMs (como Salesforce), plataformas de e-mail marketing, gateways de pagamento e ferramentas de análise de dados."
  },
  {
    question: "Quanto tempo leva para desenvolver um sistema personalizado?",
    answer: "O prazo varia com a complexidade, mas a maioria dos projetos é entregue em 3 a 6 meses, usando metodologias ágeis para entregas parciais."
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer: "Sim. Temos pacotes de manutenção, atualizações de segurança e suporte técnico contínuo para garantir o bom funcionamento."
  },
  {
    question: "Como garantem a segurança dos dados nos sistemas?",
    answer: "Usamos criptografia, controle de acesso por perfil, auditorias regulares e compliance com a LGPD e normas do setor."
  },
  {
    question: "O que inclui o desenvolvimento de uma landing page?",
    answer: "Design responsivo, SEO, configuração de A/B testing, integração com analytics e otimização para conversões."
  },
  {
    question: "Para quais segmentos vocês desenvolvem soluções?",
    answer: "Atendemos startups, PMEs, saúde, e-commerce, logística e educação, mas nossos sistemas são adaptáveis a qualquer área."
  },
  {
    question: "Como funciona o preçamento dos projetos?",
    answer: "Oferecemos contratos com valor fixo (escopo definido) ou taxa horária flexível. Tudo é detalhado na proposta inicial."
  },
  {
    question: "Têm cases de projetos anteriores para mostrar?",
    answer: "Claro! Confira casos de sucesso em nosso portfólio ou solicite uma demonstração de sistemas semelhantes."
  }
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="w-4/5 m-auto my-20 p-4">
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