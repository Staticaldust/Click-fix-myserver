// const resolvers = {
//     Query: {
//       allUsers: async () => {
//         try {
//           await client.connect();
//           const result = await client.query("SELECT * FROM users");
//           return result.rows;
//         } catch (error) {
//           throw new Error("Error fetching users from the database");
//         } finally {
//           await client.end();
//         }
//       },
//     },
//   };