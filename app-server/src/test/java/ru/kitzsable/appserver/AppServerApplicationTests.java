package ru.kitzsable.appserver;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import ru.kitzsable.appserver.models.Company;
import ru.kitzsable.appserver.repositories.CompanyRepository;
import ru.kitzsable.appserver.repositories.LaunchRepository;
import ru.kitzsable.appserver.repositories.SpaceportRepository;
import ru.kitzsable.appserver.transfer.YearlyCharacteristicValuesDTO;
import ru.kitzsable.appserver.transfer.YearlyValueDTO;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@SpringBootTest
class AppServerApplicationTests {

	@Value("${directory.images}")
	String dir;
	@Autowired
	private LaunchRepository launchRepository;
	@Autowired
	private CompanyRepository companyRepository;
	@Autowired
	private SpaceportRepository spaceportRepository;

	@Test
	void contextLoads() {
		Long l = (long) launchRepository.findAllByDateAfter(LocalDateTime.now()).size();
		System.out.println(l);
	}

}
