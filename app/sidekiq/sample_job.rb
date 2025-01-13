class SampleJob
  include Sidekiq::Job

  def perform
    puts "I've successfully run"
  end
end
