class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.text :body
      t.integer :story_id
      t.text :author

      t.timestamps null: false
    end
  end
end
