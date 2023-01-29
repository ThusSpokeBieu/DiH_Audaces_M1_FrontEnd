# DevInBank

Esse projeto simula um website de banco onde você poderá realizar algumas operações como: registrar uma conta, entrar na conta, fazer saques, depósitos e transferências para outras contas.

## Índice
  - [Considerações](#considerações)
  - [Registrar Conta](#registrar-conta)
  - [Entrar na conta](#entrar-na-conta)
  - [Operações](#operações)
  - [Reiniciar](#reiniciar)


## Considerações
Por sair às pressas, o código não está seguindo as boas práticas: está confuso, com coisas em português e outras em inglês. Além disso, o uso do bootstrap foi também para economizar tempo. 

## Registrar conta
- Para registrar uma conta você precisará estar deslogado.

- Acesse a página Registrar

- Assim que acessado, uma conta admin será gerada, e pode ser consultada pelo console.

- Siga as instruções da página e crie sua conta, o CPF e Telefone devem ter apenas números, também deverá ter uma senha forte.

- Todas contas ficam armazenadas em cache e serão mostradas no console da maioria das páginas para facilitar a consulta.

## Entrar na Conta

- Para entrar em uma conta você precisará estar deslogado.

- Acesse a página Entrar

- A credencial de acesso pode ser tanto o CPF registrado quanto o número de Conta

- Assim que estiver logado, seu login será armazenado em cache e você terá acesso às operações.

## Operações

- Para entrar em uma operações você precisará estar autenticado em alguma conta.

- Acesse a página Operações

- A página mostra os dados de sua conta, e ainda mostrará a lista de usuários no console.

- Você pode revelar seu saldo ao clicar no botão respectivo e escrever sua senha, assim como pode escondê-lo.

- Clicar em sair não vai apagar sua conta, apenas fará você deslogar.

- Para fazer uma operação, basta clicar no botão respectivo da operação.

- As operações tem um valor limite de R$1000

- O input do valor das operações não está otimizado, às vezes será necessário voltar o input para corrigir o valor. (ainda será corrigido)

- Todas operações deve confirmar a senha da conta para ser realizada, os dados do console pode te ajudar.

## Reiniciar

- Essa página serve para apagar todo o cache da página, eliminando todas contas registradas.

- Acesse a página Reiniciar