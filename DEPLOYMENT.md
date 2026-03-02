# 🚀 Guia de Deployment

## Deploy Rápido no Vercel (5 minutos)

### Passo 1: Prepare o GitHub
```bash
cd c:/Users/guilh/OneDrive/Documentos/Site/data-science-portfolio

# Inicie um repositório Git (se não existir)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit: Portfolio site setup"

# Conecte ao repositório remoto do GitHub
# (Configure seu repositório no GitHub first)
git remote add origin https://github.com/seu-usuario/data-science-portfolio.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione seu repositório `data-science-portfolio`
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **"Deploy"**

Pronto! Seu site está live! 🎉

### URL de Deploy
Seu site estará em: `https://seu-projeto.vercel.app`

---

## Deployment Alternativo: Netlify

```bash
# Instale Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Build do projeto
npm run build

# Deploy automático
netlify deploy --prod --dir=dist
```

---

## Deploy em Servidor Próprio (VPS)

### Preparação
```bash
# Faça build local
npm run build

# Copie para o servidor
scp -r dist/ usuario@seu-ip:/var/www/portfolio/
```

### No Servidor (Ubuntu/Debian)

```bash
# Instale Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instale PM2 (process manager)
sudo npm install -g pm2

# Inicie o servidor
cd /var/www/portfolio
pm2 start dist/index.js --name "portfolio"
pm2 startup
pm2 save
```

---

## Configuração do Domínio Customizado

### Vercel
1. Acesse **Project Settings** no Vercel
2. Vá para **Domains**
3. Adicione seu domínio
4. Configure os DNS da sua registradora

### Apontamentos DNS Típicos

Para `seu-dominio.com`:

```
Type: A / CNAME
Name: @ ou seu-dominio.com
Value: cname.vercel-cdn.com
```

---

## Pós-Deployment Checklist

- [ ] Teste o formulário de contato
- [ ] Verifique dark/light mode
- [ ] Teste links dos projetos
- [ ] Verifique responsividade em mobile
- [ ] Teste página 404
- [ ] Configure analytics (Google Analytics)
- [ ] Faça teste de velocidade (Lighthouse)
- [ ] Configure SSL/HTTPS (automático no Vercel)

---

## Monitoramento & Logs

### Vercel
- Dashboard automático com logs
- Histórico de deployments
- Analytics de performance

### PM2 (Self-hosted)
```bash
# Ver logs em tempo real
pm2 logs portfolio

# Ver status
pm2 status

# Reiniciar
pm2 restart portfolio
```

---

## Troubleshooting

### Build falha com "Cannot find module"
```bash
npm install
npm run build
```

### Porta 3000 já em uso
```bash
# Encontre o processo
lsof -i :3000

# Mate o processo
kill -9 <PID>
```

### CORS errors
Verifique a configuração de headers no `server/index.ts`

---

## Performance Tips

1. **Imagens**: Use imagens otimizadas (<100KB)
2. **Bundles**: Verifique tamanho com `npm run build`
3. **Cache**: Configure headers estáticos no Vercel
4. **CDN**: Vercel usa CDN global automaticamente

---

## Próximos Passos

1. ✅ Setup local e testes
2. ✅ Deploy no Vercel/Netlify
3. ✅ Configurar domínio customizado
4. ⏳ Integrar analytics
5. ⏳ Configurar email service (SendGrid)
6. ⏳ Adicionar blog (opcional)

---

Dúvidas? Consulte a [documentação do Vercel](https://vercel.com/docs)
