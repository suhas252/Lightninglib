#pragma once

namespace lightning {
class FeedForward {
private:
  double kv;
  double ks;
  double ka;

private:
  double velocity;
  double acceleration;
  double prev_velocity;

private:
  double output;

public:
  /**
   * @brief Create a FeedForward object for the fiven constants
   *
   * @param kv
   *        The velocity constant
   * @param ks
   *       The Friction constant
   * @param ka
   *        Acceleration control
   */
  FeedForward(const double _kv, const double _ks, const double _ka);

  /**
   * @brief Copy constructor
   *
   * @param other
   */
  FeedForward(const FeedForward &other);

  /**
   *@brief Destroy the Feedforward object
   */
  ~FeedForward() = default;

  /**
   * @brief Updates the controller.
   *
   * @note You should put this function inside of while loop
   * to update the input to the current reading
   * @param input
   * The actual input of the controller. "The current reading"
   */
  void update(const double input);

  /**
   * @brief Get the kv object
   *
   * @return double kv
   */
  double get_kv(void) const;

  /**
   *@brief Get the friction constant
   *@return The ks constant
   */
  double get_ks(void) const;

  /**
   *@brief  Gets the acceleration constant
   *@return The Ka constant
   */
  double get_ka(void) const;

  /**
   * @brief Gets the current output of the controller.
   * @note You should put this output to your motors.
   *
   * @return The current output
   */
  double get_output(void) const;
};
} // namespace lightning