import { connectToDatabase } from "@utils/database"
import Prompt from '@models/prompt'

export const POST=async(req,res)=>{
    const { userId,prompt,tag }=await req.json();
    try {
        await connectToDatabase()
        const newPrompt=Prompt({creator:userId,prompt,tag})
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response("Failed To Create Post",{status:500})
    }
}