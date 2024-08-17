import {defineStore} from "pinia";

interface UserState {
    userId: string | null;
    userRole: string;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => {
        return {
            userId: localStorage.getItem('userId') || null,
            userRole: '',
        }
    },
    actions: {
        setUserId(id: string) {
            this.userId = id;
            localStorage.setItem('userId', id);
        },
        getUserId(): string {
            if (!this.userId) {
                return '';
            }
            return this.userId;
        },
        setUserRole(role: string) {
            this.userRole = role;
        },
        getUserRole(): string {
            if (!this.userRole) {
                return '';
            }
            return this.userRole;
        },
        clearUserId() {
            this.userId = null;
            localStorage.removeItem('userId');
        }
    },
});
