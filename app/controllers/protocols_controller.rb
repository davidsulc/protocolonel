class ProtocolsController < ApplicationController
  # GET /protocols
  # GET /protocols.json
  def index
    @protocols = Protocol.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @protocols }
    end
  end

  # GET /protocols/1
  # GET /protocols/1.json
  def show
    @protocol = Protocol.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @protocol }
    end
  end

  # GET /protocols/new
  # GET /protocols/new.json
  def new
    @protocol = Protocol.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @protocol }
    end
  end

  # GET /protocols/1/edit
  def edit
    @protocol = Protocol.find(params[:id])
  end

  # POST /protocols
  # POST /protocols.json
  def create
    @protocol = Protocol.new(params[:protocol])

    respond_to do |format|
      if @protocol.save
        format.html { redirect_to @protocol, notice: 'Protocol was successfully created.' }
        format.json { render json: @protocol, status: :created, location: @protocol }
      else
        format.html { render action: "new" }
        format.json { render json: @protocol.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /protocols/1
  # PUT /protocols/1.json
  def update
    @protocol = Protocol.find(params[:id])

    respond_to do |format|
      if @protocol.update_attributes(params[:protocol])
        format.html { redirect_to @protocol, notice: 'Protocol was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @protocol.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /protocols/1
  # DELETE /protocols/1.json
  def destroy
    @protocol = Protocol.find(params[:id])
    @protocol.destroy

    respond_to do |format|
      format.html { redirect_to protocols_url }
      format.json { head :no_content }
    end
  end
end
