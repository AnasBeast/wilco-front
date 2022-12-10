import EntityService from './EntityService';

export default class NotificationService extends EntityService {
	async putFirebaseToken( token ) {
		await this.api.put( '/api/v1/users/me/device', { device: { token } } );
	}

	async deleteFirebaseToken() {
		try {
			await this.api.delete( '/api/v1/users/me/device' );
		} catch ( e ) {
		}
	}

	async getUnreadNotifications() {
		try {
			const response = await this.api.get( '/api/v1/pilots/me/unread_number' );
			return response;
		} catch ( e ) {
			return null;
		}
	}
}
