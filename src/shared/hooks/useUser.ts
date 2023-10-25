import { useSession } from "next-auth/react";
export const useUser = () => {

    const { data: session } = useSession<any>();
    
    return session?.user || undefined
};
