class AddLastUpdatedToStory < ActiveRecord::Migration
  def change
    add_column :stories, :last_updated, :datetime
  end
end
