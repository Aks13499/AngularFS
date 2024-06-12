package aks.sample.one.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import aks.sample.one.model.User;


@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
  Optional<User> findByUserEmail(String email);
  Optional<User> findByUserName(String username);

  Boolean existsByUserEmail(String email);
  Boolean existsByUserName(String username);
}