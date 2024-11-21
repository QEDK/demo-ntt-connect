import WormholeConnect, {
    WormholeConnectConfig,
    nttRoutes,
  } from '@wormhole-foundation/wormhole-connect';
  
  const wormholeConfig: WormholeConnectConfig = {
    network: 'Mainnet',
    chains: ['Ethereum', 'Base'],
    tokens: ['StakedAvail', 'StakedAvailBase'],
    ui: {
      title: 'Wormhole NTT UI',
      defaultInputs: {
        fromChain: 'Ethereum',
        toChain: 'Base'
      },
      showHamburgerMenu: false,
    },
    routes: [
      ...nttRoutes({
        tokens: {
          WSV_NTT: [
            // {
            //   chain: 'Ethereum',
            //   manager: '0x2E65520ff593b583A2e5895174eF7F40F78a90BD',
            //   token: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
            //   transceiver: [
            //     {
            //       address: '0xFaD96a1B1dad4a4391EEAb773Df739032526f389',
            //       type: 'wormhole',
            //     },
            //   ],
            // },
            {
              chain: 'Ethereum',
              manager: '0x71C4259648E5e6502C3cd29fB9aa818EF0142DD2',
              token: '0x3742f3Fcc56B2d46c7B8CA77c23be60Cd43Ca80a',
              transceiver: [
                {
                  address: '0xb61306eCA0284aa4FcD09C1f40f7824A59824697',
                  type: 'wormhole',
                },
              ],
            },
            // {
            //   chain: 'Base',
            //   manager: '0x4b3d190ca333a1414376Dd565ACBa58350A36d67',
            //   token: '0xd89d90d26B48940FA8F58385Fe84625d468E057a',
            //   transceiver: [
            //     {
            //       address: '0xc986dD854B8F4acb5ccF2fa1cdacC113e6de0892',
            //       type: 'wormhole',
            //     },
            //   ],
            // },
            {
              chain: 'Base',
              manager: '0x931c9E3a44A48F5b80D7B4aBB25E28AB12D1Ad2A',
              token: '0x74cb668d23E6e54524e2E1e4d1c392F5fd611783',
              transceiver: [
                {
                  address: '0x2C1812D91086Cd5538F408Ed47C813780a3F5583',
                  type: 'wormhole',
                },
              ],
            },
          ],
        },
      }),
    ],
    tokensConfig: {
      // Avail: {
      //   key: 'Avail',
      //   symbol: 'AVAIL',
      //   nativeChain: 'Ethereum',
      //   displayName: 'AVAIL',
      //   tokenId: {
      //     chain: 'Ethereum',
      //     address: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8'
      //   },
      //   coinGeckoId: 'avail',
      //   icon: 'https://wormhole.com/token.png',
      //   decimals: 18
      // },
      StakedAvail: {
        key: 'StakedAvail',
        symbol: 'stAVAIL',
        nativeChain: 'Ethereum',
        displayName: 'stAVAIL',
        tokenId: {
          chain: 'Ethereum',
          address: '0x3742f3Fcc56B2d46c7B8CA77c23be60Cd43Ca80a'
        },
        coinGeckoId: 'staked-avail',
        icon: 'https://wormhole.com/token.png',
        decimals: 18
      },
  
      // AvailBase: {
      //   key: 'AvailBase',
      //   symbol: 'AVAIL',
      //   nativeChain: 'Base',
      //   displayName: 'AVAIL',
      //   tokenId: {
      //     chain: 'Base',
      //     address: '0xd89d90d26B48940FA8F58385Fe84625d468E057a'
      //   },
      //   coinGeckoId: 'avail',
      //   icon: 'https://wormhole.com/token.png',
      //   decimals: 18
      // },
      StakedAvailBase: {
        key: 'StakedAvailBase',
        symbol: 'stAVAIL.W',
        nativeChain: 'Base',
        displayName: 'stAVAIL.W',
        tokenId: {
          chain: 'Base',
          address: '0x74cb668d23E6e54524e2E1e4d1c392F5fd611783'
        },
        coinGeckoId: 'staked-avail',
        icon: 'https://wormhole.com/token.png',
        decimals: 18
      }
    }
  }
  
  function App() {
    return (
      <div>
        <WormholeConnect config={wormholeConfig} />
      </div>
    )
  }
  export default App
