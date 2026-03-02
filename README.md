# Data Science Portfolio - Guilherme Ribeiro

Portfolio profissional de um Cientista de Dados Senior especializado em IA Generativa, Machine Learning e Engenharia de Dados.

## 🚀 Features

- ✨ Design moderno "Modern Data Minimalism"
- 🎨 Dark/Light mode automático
- 📱 Responsivo (mobile, tablet, desktop)
- ⚡ Fast performance com Vite
- 🎯 SEO otimizado
- 🔗 Integração com GitHub
- 📧 Formulário de contato funcional

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Shadcn/UI** - UI components

### Backend
- **Express.js** - API server
- **Node.js** - Runtime

### Deployment
- **Vercel** - Hosting recomendado
- **Netlify** - Alternativa
- **Self-hosted** - Opção customizada

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Setup

```bash
# Clone o repositório
git clone https://github.com/guilherme-rhs/data-science-portfolio.git
cd data-science-portfolio

# Instale dependências
pnpm install

# ou com npm
npm install
```

## 🚀 Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev

# ou npm
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build

```bash
# Build para produção
pnpm build

# ou npm
npm run build

# Teste o build localmente
pnpm preview
# ou npm
npm run preview
```

## 📍 Estrutura do Projeto

```
data-science-portfolio/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── contexts/      # Context API
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx        # App principal
│   │   └── main.tsx       # Entry point
│   └── ...
├── server/                 # Backend Express
│   └── index.ts          # API server
├── shared/                # Código compartilhado
├── dist/                  # Build output
├── package.json
├── vercel.json           # Configuração Vercel
└── README.md
```

## 🚀 Deployment

### Opção 1: Vercel (Recomendado)

1. **Faça push para GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Conecte ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Configure as variáveis de ambiente se necessário
   - Clique "Deploy"

3. **Seu site estará live em** `https://seu-projeto.vercel.app`

### Opção 2: Netlify

1. **Build local**
   ```bash
   pnpm build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

### Opção 3: Self-Hosted (VPS/Servidor Próprio)

```bash
# Build
pnpm build

# Copie a pasta 'dist' para seu servidor
scp -r dist/ usuario@seu-servidor:/path/app/

# No servidor, inicie com Node.js
cd /path/app
node dist/index.js
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` se necessário:

```env
# Backend
NODE_ENV=development
PORT=3000

# Se integrado com email service
SMTP_HOST=seu-host
SMTP_PORT=587
SMTP_USER=seu-email
SMTP_PASS=sua-senha
```

### Customização

- **Cores**: Edite `client/src/index.css` para mudar a paleta de cores
- **Conteúdo**: Edite os componentes em `client/src/components/`
- **Informações Pessoais**: Atualize dados em cada componente

## 📝 Projetos

Os projetos são armazenados em `/projects`:

```
projects/
├── modelos-risco-credito/
├── ai-agents-llms/
├── healthcare-analytics/
├── pipelines-etl/
├── mlops-monitoring/
└── bi-dashboards/
```

Cada projeto tem um repositório Git local que pode ser pushado para GitHub.

## 📧 Integração de Email

O formulário de contato está preparado para enviar emails. Para ativar:

1. **Opção 1: SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```
   - Configure `SENDGRID_API_KEY` no `.env`
   - Atualize `server/index.ts`

2. **Opção 2: Nodemailer**
   ```bash
   npm install nodemailer
   ```

3. **Opção 3: Webhook (Discord/Slack)**
   - Configure um webhook no `server/index.ts`

## 🎨 Temas

O site suporta temas claro e escuro automáticos:

```typescript
// Ativar/desativar tema customizável
// Em `client/src/App.tsx`
<ThemeProvider defaultTheme="light" switchable>
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s

## 🔐 Segurança

- HTTPS obrigatório em produção
- Input validation no formulário
- CORS configurado para APIs
- Sem dados sensíveis em repositório

## 📋 Checklist de Deploy

- [ ] Atualize links GitHub nos cards de projetos
- [ ] Configure variáveis de ambiente
- [ ] Teste o formulário de contato
- [ ] Verifique dark mode em ambos temas
- [ ] Teste responsividade em mobile
- [ ] Otimize imagens
- [ ] Configure analytics (Google Analytics, etc)
- [ ] Faça backup do banco de dados (se aplicável)

## 🆘 Troubleshooting

### Build fails com "Cannot find module"
```bash
pnpm install
pnpm build
```

### Dark mode não funciona
Verifique se `switchable={true}` está ativado em `App.tsx`

### API não responde
Verifique se o backend está rodando na porta correta

## 👨‍💻 Autor

**Guilherme Ribeiro Silva**
- Email: guilhermeribeiro111@gmail.com
- LinkedIn: [guilhermeribeirosilva](https://linkedin.com/in/guilhermeribeirosilva)
- GitHub: https://github.com/guilherme-rhs

## 📄 Licença

MIT License - Sinta-se livre para usar este template!

---

**Last Updated**: Março 2025
