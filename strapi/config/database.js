module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        database: 'teajournal',
      },
      options: {
        ssl: true,
      },
    },
  },
});
