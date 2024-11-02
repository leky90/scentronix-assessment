import axios from 'axios';
import { findServer } from './find-server';

// Mock server list
const servers = [
  { url: 'https://does-not-work.perfume.new', priority: 1 },
  { url: 'https://gitlab.com', priority: 4 },
  { url: 'http://app.scnt.me', priority: 3 },
  { url: 'https://offline.scentronix.com', priority: 2 },
];
// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('findServer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the server with the lowest priority that is online', async () => {
    mockedAxios.get.mockImplementation((url) => {
      switch (url) {
        case 'https://does-not-work.perfume.new':
          return Promise.reject(new Error('Network Error'));
        case 'https://gitlab.com':
          return Promise.resolve({ status: 200 });
        case 'http://app.scnt.me':
          return Promise.resolve({ status: 200 });
        case 'https://offline.scentronix.com':
          return Promise.reject(new Error('Offline'));
        default:
          return Promise.reject(new Error('Unknown server'));
      }
    });

    const server = await findServer(servers);
    expect(server.url).toBe('http://app.scnt.me'); // lowest priority among online servers
    expect(server.priority).toBe(3);
  });

  it('should reject if no servers are online', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Offline'));

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  });
});
