class AddAuthorIdToContributions < ActiveRecord::Migration
  def change
    add_column :contributions, :author_id, :integer
  end
end
