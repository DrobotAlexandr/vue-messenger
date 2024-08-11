import {defineStore} from "pinia";

interface LiveChatState {
    chats: object;
    messages: object;
}

export const useLiveChatStore = defineStore('liveChat', {
    state: (): LiveChatState => {
        return {
            chats: [],
            messages: [],
        }
    },
    actions: {
        setChats(chats: object): void {
            this.chats = chats;
        },
        getChats(): object {
            return this.chats;
        },
        setMessages(messages: object): void {
            this.messages = messages;
        },
        getMessages(): object {
            return this.messages;
        }
    },
});
