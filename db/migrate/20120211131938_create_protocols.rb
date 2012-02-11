class CreateProtocols < ActiveRecord::Migration
  def change
    create_table :protocols do |t|
      t.string :name
      t.text :body

      t.timestamps
    end
  end
end
