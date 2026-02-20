import { mutation } from "./_generated/server";

export const deleteDemo = mutation(async (ctx) => {
  // Delete demo user by id
  const id = "j57d2daw6yz0gr4z342zc1sz1h81g2wz";
  await ctx.db.delete(id);
});
