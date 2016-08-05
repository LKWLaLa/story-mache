class ChangeTotalContributionsInStories < ActiveRecord::Migration
  def change
    change_column :stories, :total_contributions, :integer, :default => 0
  end
end
