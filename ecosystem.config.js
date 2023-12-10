module.exports = {
    apps: [
      {
        name: "everstore",
        script: "npm",
        env: {
          NODE_ENV: "production",
        },
        args: "run start",
      },
    ],
  };