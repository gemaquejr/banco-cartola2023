import Team from '../database/models/team';

export default class TeamService {
    public teamModel = Team;

    public async createTeam(teamData: any) {
        const team = await this.teamModel.create(teamData)
        return team
    }

    public async getAllTeams() {
        const result = await this.teamModel.findAll();
        return result;
    }

    public async getTeamById(teamId: number) {
        const team = await this.teamModel.findByPk(teamId);
        return team
    }
}