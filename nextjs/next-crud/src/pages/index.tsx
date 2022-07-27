import Layout from "../components/Layout"
import Tabela from "../components/Tabela"

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 11, '2'),
    new Cliente('Carlos', 8, '3'),
    new Cliente('Pedro', 22, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
   console.log(cliente.nome) 
  }
  function clienteExcluido(cliente: Cliente){
   console.log(`Excluir... ${cliente.nome}`) 
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}>
          clienteExcluido={clienteExcluido}
        </Tabela>
      </Layout>
    </div>
  )
}
