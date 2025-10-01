FROM node:20.19.0

WORKDIR /app

COPY . /app/.

# Install dependencies for backend and frontend
RUN npm install --prefix backend && npm install --prefix frontend

# Build frontend
RUN npm run build

# Start backend
CMD ["npm", "run", "start"]