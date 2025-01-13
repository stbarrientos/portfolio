class Api::ProjectsController < ApiController
  def index
    @projects = Project.all
    render json: @projects
  end
end