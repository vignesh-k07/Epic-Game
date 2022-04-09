const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Naruto", "Sasuke", "Kakashi", "Tobi", "Madara", "Orochimaru", "Hashirama", "Itachi"],       // Names
    ["https://lh3.googleusercontent.com/2SECZcxbV2iX12O7lWNnOFtgG2FLfmLIM5N6z6L8PdgJSwFvGQstUVAax466-VoeFyKmqS7QYgnyEHMXDzqdNqZ87yMDEmAp6VZY7g=w600", // Images
      "https://lh3.googleusercontent.com/FyR0Si4ETE5LkTY2Cv2rSe5cgMkZ7AXxPAh5fnkjxBFpek9cH57t_c4V_yK2Tn8M3e2_MUTkG_Hd9C56fqkn1owUCf-4Z2SelMsv=w600",
      "https://lh3.googleusercontent.com/ZeWnsVanidem8WtKRkuVoGigh1rOWKWRZ5itLv-YxwqG96iJtVibtDZaC_M2ULR4wCbPWehNwv-xqATWqlax722kFCd1aaJbOQh45A=w600",
      "https://lh3.googleusercontent.com/hXki6c5HN5FtaoU9Vi684lBKUAuulJGLvZMeppIbghuPtg9CP5MU_GvoCdV9go9XjMIGoJaXf7ayvikK1fRF_kC59eyQF6UCLwjNmck=w600",
      "https://lh3.googleusercontent.com/OK6mgIk-S79l36kk6i-2Z99eulsq7QRgRfK_TDcStF2Rrr0UAihw6ZWofLbzHfBsSwuJaxmy95SQTIP_o6Lr3CqSD5qOQOtt8hT-=w600",
      "https://lh3.googleusercontent.com/HA6ixo9PZnUL7WC5AAMNpx3kBv2iA7d10Uj8yqZvTrU0OlUoRplO0YDFm-0cujlP3LCoYPlxOcyfDFYJxGYw5TKbezS1Ulko7-vUkw=w600",
      "https://lh3.googleusercontent.com/dfhC0LIedgybqVgxOMTdcxoidaaLj1weqU0x3VVzzoWNURYCxYV2jj7pnMnO8KIbPIrOu7XkyGtW8aCO_nwTXK9Qp6M58azE5MYLQg0=w600",
      "https://lh3.googleusercontent.com/AuxaoqIokcSrqoz3oB8hiTWAwNCS-snpj07g_xk2R0-zr8AyEg8VXoEI-lhNg1ds2TYbLjLi4uuLrorU8nYWBGDRfRpFeCeYj4phTg=w600"
    ],
    [500, 400, 300, 450, 800, 400, 900, 700],                    // HP values
    [80, 70, 60, 65, 99, 75, 100, 98],
    "Zetsu", // Boss name
    "https://lh3.googleusercontent.com/4rTnIparPbHU_zhJ-ipr51uA188aNDkmlAVcczYfsLryTTDgDYzoHm2qP8yT8vdQf6qXEoHCb6P5OT29VVOu4AM4u1ogYM_g4Pt3oA=w600", // Boss image
    10000, // Boss hp
    50 // Boss attack damage                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();