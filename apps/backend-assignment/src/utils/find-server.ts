import axios from 'axios';

interface Server {
  url: string;
  priority: number;
}

export async function findServer(servers: Server[]) {
  const timeout = 5000;

  const checkStatusPromises = servers.map(async (server) => {
    try {
      const response = await axios.get(server.url, { timeout });

      if (response.status >= 200 && response.status < 300) {
        return { server, online: true };
      }
    } catch {
      console.log('server offline', server.url);
    }
    return { server, online: false };
  });

  const results = await Promise.all(checkStatusPromises);
  const onlineServers = results
    .filter((result) => result.online)
    .map((result) => result.server);

  if (onlineServers.length === 0) {
    return Promise.reject(new Error('No servers are online'));
  }

  onlineServers.sort((a, b) => a.priority - b.priority);

  return Promise.resolve(onlineServers[0]);
}
