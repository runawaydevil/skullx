# Gerenciamento de Navegação no Ghost

## Como Gerenciar a Navegação

A navegação do site é gerenciada diretamente no **Ghost Admin**, não no tema.

### Remover uma Página da Navegação

1. Acesse **Ghost Admin → Settings → Navigation**
2. Encontre o item que deseja remover (ex: "All about Pablo")
3. Clique no ícone de lixeira ou remova o item
4. Clique em **Save** para salvar as alterações

### Adicionar uma Página à Navegação

1. Crie a página em **Ghost Admin → Pages → New page**
2. Publique a página
3. Acesse **Settings → Navigation**
4. Clique em **Add item**
5. Selecione a página desejada
6. Clique em **Save**

### Notas Importantes

- A navegação é renderizada pelo helper `{{navigation}}` no template `default.hbs`
- O tema não controla quais páginas aparecem na navegação
- Se uma página foi removida mas ainda aparece, verifique:
  - Cache do navegador (Ctrl+F5)
  - Se a página foi realmente removida da Navigation no Admin
  - Se há algum cache do Ghost (reinicie o servidor se necessário)

