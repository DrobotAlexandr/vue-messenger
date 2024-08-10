import {defineStore} from "pinia";

interface UserState {
    userId: string | null;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => {
        return {
            userId: localStorage.getItem('userId') || null,
        }
    },
    actions: {
        setUserId(id: string) {
            this.userId = id;
            localStorage.setItem('userId', id);
        },
        getUserId() {
            return this.userId;
        },
        clearUserId() {
            this.userId = null;
            localStorage.removeItem('userId');
        }
    },
});
