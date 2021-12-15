const generateMission = (
  id: number,
  task: string,
  points: number,
  reward_category: number,
) => {
  return {
    id,
    task,
    points,
    reward_category,
  };
};

const MissionData = {
  mission1: [
    generateMission(
      0,
      'Be in the set of top 20 participants who have interacted with the most unique smart contracts in an eligible way',
      50,
      1,
    ),
    generateMission(
      1,
      'Deploy a verified smart contract and garner eligible interactions from at least 500 unique registered addresses',
      20,
      1,
    ),
    generateMission(
      2,
      'Deploy a verified DeFi-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(
      3,
      'Deploy a verified NFT-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(
      4,
      'Deploy a verified DAO-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(5, 'Deploy any verified smart contract', 5, 1),
    generateMission(
      6,
      "Deploy a verified smart contract that leverages Evmos' Intrarelayer module",
      30,
      2,
    ),
    generateMission(
      7,
      'Convert an EVM ERC20 token into a Cosmos SDK coin, or vice versa',
      5,
      2,
    ),
    generateMission(
      8,
      'Be in the set of the first 50 addresses who carry out an eligible IBC transfer',
      20,
      3,
    ),
    generateMission(
      9,
      'Carry out an outbound IBC transfer of an EVM ERC20 that has been converted into a Cosmos SDK coin',
      30,
      3,
    ),
    generateMission(
      10,
      'Deploy a verified bridge-related (EVM) smart contract and garner eligible interactions from at least 300 unique registered addresses',
      50,
      3,
    ),
    generateMission(
      11,
      'Make an eligible governance proposal that ends up reaching quorum',
      10,
      4,
    ),
    generateMission(
      12,
      'Have any amount of tokens delegated to any validator for more than 75% of the Olympus Mons runtime',
      5,
      4,
    ),
    generateMission(
      13,
      'Vote on an eligible governance proposal that ends up reaching quorum',
      5,
      4,
    ),
  ],
};

export default MissionData;
