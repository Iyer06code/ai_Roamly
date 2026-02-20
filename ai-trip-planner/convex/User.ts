import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const CreateNewUSer =mutation({
    args:{
        name:v.string(),
        imageUrl:v.string(),
        email:v.string(),
        subscription:v.optional(v.string())
    },
    handler: async (ctx, args) => {
        //If user already exists, return
        const user=await ctx.db.query("UserTable")
        .filter((q) => q.eq(q.field('email'),args.email))
        .collect();

        if(user?.length==0)
            {
                const userData={
                    name:args.name,
                    imageUrl:args.imageUrl,
                    email:args.email,
                    
                }
            // if not then create new user 
                const result=await ctx.db.insert("UserTable",userData);
                return userData;
            }

            return user[0];


    }
})