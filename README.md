# Site – Painel de Metas (MVP estático)

Primeira página funcional do sistema de evolução pessoal. Inclui criação/edição/conclusão/anulação de metas, ofensiva principal, meta especial “não comer doce”, filtros, timer até meia-noite e template semanal pré-carregado conforme relatório.

## Como visualizar

1. Abra o arquivo `index.html` no navegador (duplo clique ou botão “Open with Live Server”).
2. Não há dependências ou build; toda a lógica está em HTML/CSS/JS puro.

## Principais funcionalidades da página

- Metas do dia com ações: concluir, voltar a pendente, anular, editar e excluir.
- Ação de quebrar meta: risca, zera ofensiva se for obrigatória e não conta como concluída.
- Criação de novas metas com recorrência por dia da semana, origem (geral/sono/finanças/especial), regras de contagem e quebra de ofensiva, opção de lembrete e anulação.
- Filtros e busca (status, origem, lembretes) e reset do dia.
- Ofensiva principal: calcula streak apenas com metas que quebram ofensiva; medalhas em 7/30/60/90/180/360 dias.
- Meta especial “não comer doce”: streak independente com medalhas (7/30/60/90), não afeta a ofensiva geral.
- Timer em tempo real até meia-noite; renova checklist automaticamente.
- Resumo diário (concluídas, pendentes, anuladas, progresso) e visualização do template semanal carregado do relatório.

## Estrutura

- `index.html`: painel de metas com ofensiva, meta especial de não comer doce, CRUD local (localStorage), integração de sono e finanças embutidas.
- `conquistas.html`: painel de conquistas/badalhas lendo o mesmo localStorage das metas (ofensiva geral, não comer doce, progresso diário e histórico rápido).

## Observações e próximos passos

- Os dados ficam somente no navegador (localStorage). Para persistência real, será necessário backend/BD.
- Gráficos e integrações completas com finanças/sono podem ser ligados em etapas posteriores.
- Ajustar identidade visual final e conectar a uma API quando disponível.
