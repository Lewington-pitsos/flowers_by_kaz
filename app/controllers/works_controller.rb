class WorksController < ApplicationController
  before_action :find_work, only: [:show, :destroy, :edit, :update]

  def index
    @works = Work.all
  end

  def show
  end

  def new
    @category = Category.find(params[:category_id])
    @work = Work.new
  end

  def create
    @category = Category.find(params[:category_id])
    @work = @category.works.create(image_info)
    if @work
      save_place(@category, @work, @work.place.to_i)
      flash[:success] = 'work uploaded and saved *nice*'
      redirect_to category_path(params[:category_id])
    else
      flash.now[:error] = "invalid input, no upload occured :("
      render 'new'
    end
  end

  def destroy
    id = @work.category.id

    # the deleted work's position is recorded, the work is destroyed, and THEN all highert works form the same cetegory are shuffled down as far as they can be shuffled down
    deleted_position = @work.position
    @work.destroy
    work_shuffle_delete(deleted_position, id)

    redirect_to category_path(id)
  end

  def edit
  end

  def update
    if @work.update_attributes(image_info)
      save_place(@work.category, @work, @work.place.to_i)
      flash[:success] = 'work updated'
      redirect_to category_path(@work.category_id)
    else
      flash.now[:error] = 'invalid input'
      render 'edit'
    end
  end

  # ----------------------------------

  private

  def find_work
    @work = Work.find(params[:id])
  end

  def image_info
    params.require(:work).permit(:title, :image, :caption, :place)
  end
end
