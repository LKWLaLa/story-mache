class AddTotalContributionsToStory < ActiveRecord::Migration
  def change
    add_column :stories, :total_contributions, :integer
  end
end
