FROM node:16-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# I do a copy instead of use a volume so I don't bash the node_modules.
COPY . .

# Install all deps.
ENV NODE_ENV=production

# A simple ping will do for healthchecks for now.
HEALTHCHECK --interval=5m --timeout=5m --start-period=10m --retries=3 CMD ["curl --fail http://localhost:3001" ]

EXPOSE 3001

ENTRYPOINT ["./ops/web-entrypoint.sh"]
