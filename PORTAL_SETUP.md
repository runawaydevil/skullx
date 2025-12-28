# Ghost Portal - Guia de Configuração

Este guia descreve como configurar o Ghost Portal para manter consistência visual com o tema SkullX.

## Configurações no Ghost Admin

### 1. Portal Settings

Acesse: **Settings → Portal**

#### Signup Options
- Configure as opções de signup conforme necessário
- Defina tiers e preços se aplicável
- Configure opções de newsletter

#### Look & Feel
- **Accent Color**: Configure para combinar com o tema
  - Dark mode: `#bd93f9` (roxo profundo - `--accent`)
  - Light mode: `#7c3aed` (roxo mais claro)
  - Ou use uma cor intermediária que funcione em ambos

### 2. Site Settings

Acesse: **Settings → General**

- **Accent Color**: Sincronize com a cor do Portal para consistência
- Verifique que as cores do site estão alinhadas com o tema

## Implementação no Tema

O tema já inclui:

1. **Links do Portal no Header** (`default.hbs`):
   - Botão "Sign in" com `data-portal="signin"`
   - Botão "Sign up" com `data-portal="signup"`
   - Botão "Account" com `data-portal="account"` (quando logado)

2. **Estilos do Portal** (`assets/css/ghost/members.css`):
   - Formulários de autenticação estilizados com tokens do tema
   - Mensagens de sucesso/erro com cores consistentes
   - Botões com estilo minimalista do tema

## Teste do Fluxo

1. **Signup**:
   - Clique em "Sign up" no header
   - Preencha o formulário
   - Verifique o email magic link

2. **Signin**:
   - Clique em "Sign in" no header
   - Use o magic link recebido

3. **Account**:
   - Após login, clique em "Account"
   - Verifique upgrade de tier (se configurado)

## Customização Avançada (Opcional)

Para customização visual mais profunda do Portal, consulte `assets/js/portalTheme.js` (se implementado).

**Aviso**: Customizações avançadas podem quebrar em updates do Ghost Portal. Revise após cada atualização.

## Suporte

Para mais informações sobre o Ghost Portal, consulte a [documentação oficial](https://ghost.org/docs/members/portal/).

