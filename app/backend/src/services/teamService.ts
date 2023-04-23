import Team from '../database/models/team';

export default class TeamService {
    public teamModel = Team;

    public async getAllTeams() {
        const result = await this.teamModel.findAll();
        return result;
    }
}