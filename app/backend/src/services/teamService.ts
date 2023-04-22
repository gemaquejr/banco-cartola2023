import Team from '../database/models/team';

export default class UserService {
    public userModel = Team;

    public async getTeams() {
        const result = await this.userModel.findAll();
        return result;
    }
}