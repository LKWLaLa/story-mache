class RemoveLastUpdatedFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :last_updated, :datetime
  end
end
