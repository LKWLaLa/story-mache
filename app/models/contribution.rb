class Contribution < ActiveRecord::Base
  belongs_to :story
  belongs_to :author

  def author_attributes=(attributes)
    this_author = Author.find_or_create_by(attributes)
    self.author = this_author
  end

end
