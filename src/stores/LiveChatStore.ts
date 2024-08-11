import {defineStore} from "pinia";

interface LiveChatState {
    chats: object;
}

export const useLiveChatStore = defineStore('liveChat', {
    state: (): LiveChatState => {
        return {
            chats: [],
        }
    },
    actions: {
        setChats(chats: object): void {
            this.chats = chats;
        },
        getChats(): object {
            return this.chats;
        }
    },
});
