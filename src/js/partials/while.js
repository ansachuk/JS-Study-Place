export const calculateClientsInHotel = function () {
  let clientCounter = 56;
  const maxClients = 70;
  while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
  }
  return `Your hotel are full!You have ${clientCounter} clients in Your hotel!`;
};
