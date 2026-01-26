const blockPings = (request, response, next) => {
  if (process.env.DISABLE_PINGS === 'true') {
    console.log('Blocking pings\n');
    return response.status(200).json({ message: 'Pings disabled in server' });
  }

  next();
};

module.exports = {
  blockPings
};