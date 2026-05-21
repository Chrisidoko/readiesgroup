module.exports = {
  apps: [
    {
      name: "readiesgroup",
      script: "npm",
      args: "run start",
      env: {
        PORT: 3008, // Set the port environment variable here
      },
    },
  ],
};
