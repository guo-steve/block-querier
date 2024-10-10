import Client from 'bitcoin-core';

export class BitcoinClient {
  private client: Client;

  constructor() {
    this.client = new Client({
      network: 'mainnet',
      host: 'nd-471-312-455.p2pify.com',
      username: 'mystifying-dubinsky',
      password: 'junkie-vanity-oval-briar-cork-dose',
    });
  }

  public async getTransaction(txHash: string) {
    const transaction = await this.client;
  }
}
